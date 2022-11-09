import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { base64ToFile } from "src/utils";

type TUseFileUpload = {
  loading: boolean;
  data: ResponseUpload | null;
  upload: (f: File | string) => Promise<void>;
  destroy: () => Promise<void>;
};

type ResponseUpload = {
  message: string;
  public_id: string;
  status: number;
  type: string;
  url: string;
};

export default function useFileUpload(): TUseFileUpload {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ResponseUpload | null>(null);

  const uri = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      // dev code
      return `${process.env.REACT_APP_API_ENDPOINT_LOCAL}`;
    } else {
      // production code
      return `${process.env.REACT_APP_API_ENDPOINT}`;
    }
  };

  const upload = async (file: File | string) => {
    try {
      setLoading(true);
      if (!file) return;
      const formData: FormData = new FormData();

      if (typeof file === "string") {
        const f = await base64ToFile(file);
        formData.append("file", f);
      } else {
        formData.append("file", file);
      }
      const data = await axios.post<ResponseUpload>(
        `${uri()}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setData(data.data);
      toast.success(data.data.message);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      console.error(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  const destroy = async () => {
    try {
      setLoading(true);
      if (!data?.public_id) return;
      await axios.post(`${uri()}/destroy`, {
        publicId: data.public_id,
      });
      //   setData(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      console.error(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    data,
    upload,
    destroy,
  };
}
