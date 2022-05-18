export function readFileAsText(file: Blob): Promise<any> {
  return new Promise(function (resolve, reject) {
    let fr = new FileReader();
    fr.onload = function () {
      resolve(fr.result);
    };

    fr.onerror = function () {
      reject(fr);
    };

    // fr.readAsText(file);
    fr.readAsDataURL(file);
  });
}
