interface IconProps {
  color?: string;
  title?: string;
  [x: string]: any;
}
const HomeIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.9695 0.378115C8.248 0.135296 8.61673 0 9 0C9.38327 0 9.752 0.135296 10.0305 0.378115L17.2965 6.71226C17.7465 7.10373 18 7.65013 18 8.22005V15.925C18 16.4754 17.7629 17.0031 17.341 17.3923C16.919 17.7814 16.3467 18 15.75 18H12.75C12.4544 18 12.1617 17.9463 11.8886 17.8419C11.6155 17.7376 11.3674 17.5846 11.1585 17.3918C10.9495 17.1989 10.7838 16.97 10.6708 16.7181C10.5579 16.4662 10.4998 16.1963 10.5 15.9237V12.4654C10.5 12.282 10.421 12.106 10.2803 11.9763C10.1397 11.8466 9.94891 11.7738 9.75 11.7738H8.25C8.05109 11.7738 7.86032 11.8466 7.71967 11.9763C7.57902 12.106 7.5 12.282 7.5 12.4654V15.9237C7.5 16.474 7.26295 17.0017 6.84099 17.3909C6.41903 17.78 5.84674 17.9986 5.25 17.9986H2.25C1.65326 17.9986 1.08097 17.78 0.65901 17.3909C0.237053 17.0017 0 16.474 0 15.9237V8.21867C0 7.64875 0.255 7.10235 0.705 6.71087L7.9695 0.375349V0.378115ZM9 1.38239L1.734 7.71792C1.66024 7.7824 1.60146 7.86005 1.56123 7.94613C1.52101 8.03221 1.50017 8.12494 1.5 8.21867V15.9237C1.5 16.1071 1.57902 16.283 1.71967 16.4127C1.86032 16.5424 2.05109 16.6153 2.25 16.6153H5.25C5.44891 16.6153 5.63968 16.5424 5.78033 16.4127C5.92098 16.283 6 16.1071 6 15.9237V12.4654C6 11.9151 6.23705 11.3873 6.65901 10.9982C7.08097 10.6091 7.65326 10.3905 8.25 10.3905H9.75C10.3467 10.3905 10.919 10.6091 11.341 10.9982C11.7629 11.3873 12 11.9151 12 12.4654V15.9237C12 16.1071 12.079 16.283 12.2197 16.4127C12.3603 16.5424 12.5511 16.6153 12.75 16.6153H15.75C15.9489 16.6153 16.1397 16.5424 16.2803 16.4127C16.421 16.283 16.5 16.1071 16.5 15.9237V8.21867C16.5 8.1247 16.4793 8.03172 16.4391 7.94538C16.3988 7.85905 16.3399 7.78118 16.266 7.71653L9 1.38239Z"
      fill={color}
    />
  </svg>
);

const GlobalIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM6.939 15.9003C6.05107 14.0169 5.53668 11.9792 5.4243 9.9H1.8558C2.03093 11.285 2.60453 12.5893 3.50691 13.6545C4.40929 14.7197 5.60161 15.4999 6.939 15.9003V15.9003ZM7.227 9.9C7.3629 12.0951 7.9902 14.157 9 15.9768C10.0371 14.1089 10.6429 12.0325 10.773 9.9H7.227V9.9ZM16.1442 9.9H12.5757C12.4633 11.9792 11.9489 14.0169 11.061 15.9003C12.3984 15.4999 13.5907 14.7197 14.4931 13.6545C15.3955 12.5893 15.9691 11.285 16.1442 9.9V9.9ZM1.8558 8.1H5.4243C5.53668 6.02081 6.05107 3.98312 6.939 2.0997C5.60161 2.50009 4.40929 3.28028 3.50691 4.34547C2.60453 5.41065 2.03093 6.71499 1.8558 8.1V8.1ZM7.2279 8.1H10.7721C10.6423 5.96754 10.0368 3.89118 9 2.0232C7.96291 3.8911 7.3571 5.96747 7.227 8.1H7.2279ZM11.061 2.0997C11.9489 3.98312 12.4633 6.02081 12.5757 8.1H16.1442C15.9691 6.71499 15.3955 5.41065 14.4931 4.34547C13.5907 3.28028 12.3984 2.50009 11.061 2.0997V2.0997Z"
      fill={color}
    />
  </svg>
);
const MenuIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 16.7143C18 17.0553 17.8815 17.3823 17.6705 17.6234C17.4595 17.8645 17.1734 18 16.875 18L1.125 18C0.826632 18 0.540482 17.8645 0.329504 17.6234C0.118527 17.3823 8.25902e-08 17.0553 1.12401e-07 16.7143C1.42211e-07 16.3733 0.118527 16.0463 0.329504 15.8051C0.540482 15.564 0.826632 15.4286 1.125 15.4286L16.875 15.4286C17.1734 15.4286 17.4595 15.564 17.6705 15.8051C17.8815 16.0463 18 16.3733 18 16.7143Z"
      fill={color}
    />
    <path
      d="M18 1.2857C18 1.62669 17.8815 1.95372 17.6705 2.19483C17.4595 2.43595 17.1734 2.57141 16.875 2.57141L1.125 2.57141C0.826632 2.57141 0.540482 2.43595 0.329504 2.19483C0.118527 1.95371 8.25902e-08 1.62669 1.12401e-07 1.28569C1.42211e-07 0.944702 0.118527 0.617674 0.329504 0.376556C0.540482 0.135437 0.826632 -2.05748e-05 1.125 -2.05487e-05L16.875 -1.91718e-05C17.1734 -1.91458e-05 17.4595 0.135439 17.6705 0.376557C17.8815 0.617676 18 0.944703 18 1.2857Z"
      fill={color}
    />
    <path
      d="M16.875 10.2857C17.1734 10.2857 17.4595 10.1503 17.6705 9.90916C17.8815 9.66804 18 9.34101 18 9.00002C18 8.65903 17.8815 8.332 17.6705 8.09089C17.4595 7.84977 17.1734 7.71431 16.875 7.71431L7.875 7.71431C7.57663 7.71431 7.29048 7.84977 7.07951 8.09088C6.86853 8.332 6.75 8.65903 6.75 9.00002C6.75 9.34101 6.86853 9.66804 7.0795 9.90916C7.29048 10.1503 7.57663 10.2857 7.875 10.2857L16.875 10.2857Z"
      fill={color}
    />
  </svg>
);
const VideoIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3636 0H1.63636C0.728182 0 0 0.89 0 2V14C0 14.5304 0.172402 15.0391 0.47928 15.4142C0.786158 15.7893 1.20237 16 1.63636 16H5.72727V18H12.2727V16H16.3636C17.2636 16 17.9918 15.1 17.9918 14L18 2C18 1.46957 17.8276 0.960859 17.5207 0.585786C17.2138 0.210714 16.7976 0 16.3636 0ZM16.3636 14H1.63636V2H16.3636V14Z"
      fill={color}
    />
  </svg>
);

const MessageIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <div title={props.title}>
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V16C24 16.7072 23.719 17.3855 23.219 17.8856C22.7189 18.3857 22.0406 18.6667 21.3333 18.6667H8C7.42267 18.6667 6.86133 18.8533 6.4 19.2L0 24ZM2.66667 2.66667V18.6667L5.512 16.5333C5.97333 16.1867 6.53467 15.9987 7.112 16H21.3333V2.66667H2.66667Z"
        fill={color}
      />
    </svg>
  </div>
);
const BellIcon = ({ color = "#D0D0D0", title, ...props }: IconProps) => (
  <div title={title}>
    <svg
      {...props}
      width="24"
      height="30"
      viewBox="0 0 24 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3529 22.0588H5.64706V12.8824C5.64706 9.35294 8.47059 6.52941 12 6.52941C15.5294 6.52941 18.3529 9.35294 18.3529 12.8824V22.0588ZM21.1765 20.6471V12.8824C21.1765 8.54824 18.1553 4.92 14.1176 3.96V3C14.1176 2.43837 13.8945 1.89974 13.4974 1.5026C13.1003 1.10546 12.5616 0.882355 12 0.882355C11.4384 0.882355 10.8997 1.10546 10.5026 1.5026C10.1055 1.89974 9.88235 2.43837 9.88235 3V3.96C5.83059 4.92 2.82353 8.54824 2.82353 12.8824V20.6471L0 23.4706V24.8824H24V23.4706L21.1765 20.6471ZM12 29.1176C12.7488 29.1176 13.467 28.8202 13.9965 28.2907C14.5261 27.7611 14.8235 27.043 14.8235 26.2941H9.17647C9.17647 27.043 9.47395 27.7611 10.0035 28.2907C10.533 28.8202 11.2512 29.1176 12 29.1176Z"
        fill={color}
      />
    </svg>
  </div>
);
const MoreHorizontalIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="6"
    viewBox="0 0 24 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.66665C13.4728 5.66665 14.6667 4.47274 14.6667 2.99998C14.6667 1.52722 13.4728 0.333313 12 0.333313C10.5272 0.333313 9.33334 1.52722 9.33334 2.99998C9.33334 4.47274 10.5272 5.66665 12 5.66665Z"
      fill={color}
    />
    <path
      d="M21.3333 5.66665C22.8061 5.66665 24 4.47274 24 2.99998C24 1.52722 22.8061 0.333313 21.3333 0.333313C19.8606 0.333313 18.6667 1.52722 18.6667 2.99998C18.6667 4.47274 19.8606 5.66665 21.3333 5.66665Z"
      fill={color}
    />
    <path
      d="M2.66667 5.66665C4.13943 5.66665 5.33333 4.47274 5.33333 2.99998C5.33333 1.52722 4.13943 0.333313 2.66667 0.333313C1.19391 0.333313 0 1.52722 0 2.99998C0 4.47274 1.19391 5.66665 2.66667 5.66665Z"
      fill={color}
    />
  </svg>
);
const MoreVerticalIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="6"
    height="24"
    viewBox="0 0 6 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.333339 12C0.333339 13.4727 1.52725 14.6666 3.00001 14.6666C4.47276 14.6666 5.66667 13.4727 5.66667 12C5.66667 10.5272 4.47276 9.33331 3.00001 9.33331C1.52725 9.33331 0.333339 10.5272 0.333339 12Z"
      fill={color}
    />
    <path
      d="M0.333339 21.3334C0.333339 22.8061 1.52725 24 3.00001 24C4.47276 24 5.66667 22.8061 5.66667 21.3334C5.66667 19.8606 4.47276 18.6667 3.00001 18.6667C1.52725 18.6667 0.333339 19.8606 0.333339 21.3334Z"
      fill={color}
    />
    <path
      d="M0.333339 2.66667C0.333339 4.13943 1.52725 5.33333 3.00001 5.33333C4.47276 5.33333 5.66667 4.13943 5.66667 2.66667C5.66667 1.19391 4.47276 -5.21873e-08 3.00001 -1.16564e-07C1.52725 -1.8094e-07 0.333339 1.19391 0.333339 2.66667Z"
      fill={color}
    />
  </svg>
);

const RightIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M184 112l144 144-144 144"
      stroke-color={color}
    />
  </svg>
);
const FireIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="34"
    height="44"
    viewBox="0 0 34 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 42C25.235 42 32 35.474 32 27.098C32 25.042 31.895 22.838 30.755 19.412C29.615 15.986 29.386 15.544 28.181 13.428C27.666 17.745 24.911 19.545 24.211 20.083C24.211 19.523 22.545 13.336 20.018 9.633C17.537 6 14.163 3.617 12.185 2C12.185 5.07 11.322 9.634 10.085 11.96C8.849 14.285 8.617 14.37 7.072 16.1C5.528 17.83 4.819 18.365 3.527 20.465C2.236 22.565 2 25.362 2 27.418C2 35.794 8.765 42 17 42Z"
      stroke={color}
      strokeWidth="4"
      strokeLinejoin="round"
    />
  </svg>
);
const ShareIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="29"
    height="23"
    viewBox="0 0 29 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0502 5.82696V1.4371C13.0501 1.15286 12.965 0.875007 12.8057 0.638682C12.6464 0.402358 12.4199 0.218169 12.155 0.1094C11.8901 0.000630953 11.5986 -0.0278341 11.3174 0.0276033C11.0362 0.0830407 10.7778 0.219891 10.575 0.420855L0.425137 10.4827C0.290368 10.6161 0.183449 10.7745 0.110499 10.9489C0.0375491 11.1233 0 11.3102 0 11.499C0 11.6878 0.0375491 11.8747 0.110499 12.0491C0.183449 12.2234 0.290368 12.3819 0.425137 12.5152L10.575 22.5771C10.7775 22.7788 11.0359 22.9163 11.3174 22.9721C11.5989 23.0279 11.8907 22.9996 12.1559 22.8907C12.4211 22.7818 12.6477 22.5973 12.8069 22.3605C12.9661 22.1237 13.0508 21.8454 13.0502 21.5609V17.1106C13.462 17.0819 13.8694 17.0689 14.2725 17.0689C22.1401 17.0689 26.2189 22.2034 26.3973 22.4305C26.5801 22.6701 26.8343 22.8467 27.1239 22.9352C27.4136 23.0237 27.7239 23.0196 28.0111 22.9235C28.2992 22.8277 28.5496 22.6447 28.7271 22.4002C28.9045 22.1556 29 21.8621 29 21.5609C29 8.44592 17.2754 6.20787 13.0502 5.82696ZM14.2725 14.1941C13.3344 14.1941 12.3701 14.2588 11.4088 14.3853C11.0604 14.4316 10.7408 14.6017 10.5093 14.8639C10.2778 15.1261 10.1502 15.4628 10.1502 15.8112V18.0909L3.50056 11.499L10.1502 4.90701V7.18675C10.1502 7.9802 10.8331 8.62416 11.6321 8.62416C12.9516 8.62416 23.3973 8.91308 25.6665 17.8595C23.2682 16.1088 19.4591 14.1941 14.2725 14.1941Z"
      fill={color}
    />
  </svg>
);
const SearchIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.4743 28.9507L25.4318 22.9259C27.3814 20.4422 28.4392 17.3751 28.4353 14.2176C28.4353 11.4057 27.6014 8.65683 26.0392 6.31875C24.4769 3.98067 22.2564 2.15836 19.6585 1.08226C17.0606 0.00616023 14.2019 -0.275396 11.4439 0.273194C8.68597 0.821785 6.15263 2.17588 4.16426 4.16426C2.17588 6.15263 0.821785 8.68597 0.273194 11.4439C-0.275396 14.2019 0.00616023 17.0606 1.08226 19.6585C2.15836 22.2564 3.98067 24.4769 6.31875 26.0392C8.65683 27.6014 11.4057 28.4353 14.2176 28.4353C17.3751 28.4392 20.4422 27.3814 22.9259 25.4318L28.9507 31.4743C29.1159 31.6409 29.3124 31.7731 29.529 31.8633C29.7456 31.9535 29.9779 32 30.2125 32C30.4471 32 30.6794 31.9535 30.896 31.8633C31.1125 31.7731 31.3091 31.6409 31.4743 31.4743C31.6409 31.3091 31.7731 31.1125 31.8633 30.896C31.9535 30.6794 32 30.4471 32 30.2125C32 29.9779 31.9535 29.7456 31.8633 29.529C31.7731 29.3124 31.6409 29.1159 31.4743 28.9507ZM3.55442 14.2176C3.55442 12.1087 4.1798 10.047 5.35149 8.29347C6.52318 6.53991 8.18855 5.17318 10.137 4.36611C12.0855 3.55903 14.2295 3.34786 16.2979 3.75931C18.3664 4.17075 20.2664 5.18632 21.7577 6.6776C23.249 8.16888 24.2645 10.0689 24.676 12.1374C25.0874 14.2058 24.8763 16.3498 24.0692 18.2983C23.2621 20.2467 21.8954 21.9121 20.1418 23.0838C18.3883 24.2555 16.3266 24.8809 14.2176 24.8809C11.3896 24.8809 8.67735 23.7574 6.6776 21.7577C4.67786 19.7579 3.55442 17.0457 3.55442 14.2176Z"
      fill={color}
    />
  </svg>
);
const FacebookIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    {...props}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M23.446 18L24.335 12.209H18.778V8.45098C18.778 6.86698 19.554 5.32198 22.043 5.32198H24.569V0.391977C24.569 0.391977 22.277 0.000976562 20.085 0.000976562C15.509 0.000976562 12.518 2.77498 12.518 7.79598V12.21H7.43103V18.001H12.518V32.001H18.778V18.001L23.446 18Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const GoogleColoredIcon = ({ color = "#D0D0D0", ...props }: IconProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
      fill="#FFC107"
    />
    <path
      d="M6.30603 14.691L12.877 19.51C14.655 15.108 18.961 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C16.318 4 9.65603 8.337 6.30603 14.691Z"
      fill="#FF3D00"
    />
    <path
      d="M23.9999 44C29.1659 44 33.8599 42.023 37.4089 38.808L31.2189 33.57C29.1435 35.1483 26.6074 36.002 23.9999 36C18.7979 36 14.3809 32.683 12.7169 28.054L6.19495 33.079C9.50495 39.556 16.2269 44 23.9999 44Z"
      fill="#4CAF50"
    />
    <path
      d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z"
      fill="#1976D2"
    />
  </svg>
);
export {
  FacebookIcon,
  GoogleColoredIcon,
  SearchIcon,
  ShareIcon,
  FireIcon,
  BellIcon,
  MessageIcon,
  HomeIcon,
  GlobalIcon,
  VideoIcon,
  MenuIcon,
  RightIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
};
