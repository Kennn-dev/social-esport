interface IconProps {
  color?: string;
  title?: string;
  [x: string]: any;
}
const HomeIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12 18V15"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobalIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3C16.95 8.84 16.95 15.16 15 21"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MenuIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
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
const VideoIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MessageIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9965 11H16.0054"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9955 11H12.0045"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.99451 11H8.00349"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const BellIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
      fill={color}
    />
    <path
      d="M13.8796 3.94018C13.8096 3.94018 13.7396 3.93018 13.6696 3.91018C13.3796 3.83018 13.0996 3.77018 12.8296 3.73018C11.9796 3.62018 11.1596 3.68018 10.3896 3.91018C10.1096 4.00018 9.80963 3.91018 9.61963 3.70018C9.42963 3.49018 9.36963 3.19018 9.47963 2.92018C9.88963 1.87018 10.8896 1.18018 12.0296 1.18018C13.1696 1.18018 14.1696 1.86018 14.5796 2.92018C14.6796 3.19018 14.6296 3.49018 14.4396 3.70018C14.2896 3.86018 14.0796 3.94018 13.8796 3.94018Z"
      fill={color}
    />
    <path
      d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
      fill={color}
    />
  </svg>
);
const MoreHorizontalIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);
const MoreVerticalIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path
      d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);

const RightIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 12H20.33"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const FireIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ShareIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M16.96 6.17004C18.96 7.56004 20.34 9.77004 20.62 12.32"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.19 20.9399C9.35 21.5299 10.67 21.8599 12.06 21.8599C13.4 21.8599 14.66 21.5599 15.79 21.0099"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.06 7.70001C13.5954 7.70001 14.84 6.45537 14.84 4.92001C14.84 3.38466 13.5954 2.14001 12.06 2.14001C10.5247 2.14001 9.28003 3.38466 9.28003 4.92001C9.28003 6.45537 10.5247 7.70001 12.06 7.70001Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.82999 19.92C6.36534 19.92 7.60999 18.6753 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6753 3.29464 19.92 4.82999 19.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.17 19.92C20.7054 19.92 21.95 18.6753 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6753 17.6347 19.92 19.17 19.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SearchIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 22L20 20"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const FacebookIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
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
const LeftIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 12H3.67004"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const UserIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z"
      fill={color}
    />
    <path
      d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z"
      fill={color}
    />
  </svg>
);
const CategoryIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
      fill={color}
    />
    <path
      d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
      fill={color}
    />
    <path
      d="M6 10.75C3.38 10.75 1.25 8.62 1.25 6C1.25 3.38 3.38 1.25 6 1.25C8.62 1.25 10.75 3.38 10.75 6C10.75 8.62 8.62 10.75 6 10.75ZM6 2.75C4.21 2.75 2.75 4.21 2.75 6C2.75 7.79 4.21 9.25 6 9.25C7.79 9.25 9.25 7.79 9.25 6C9.25 4.21 7.79 2.75 6 2.75Z"
      fill={color}
    />
    <path
      d="M18 22.75C15.38 22.75 13.25 20.62 13.25 18C13.25 15.38 15.38 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 20.62 20.62 22.75 18 22.75ZM18 14.75C16.21 14.75 14.75 16.21 14.75 18C14.75 19.79 16.21 21.25 18 21.25C19.79 21.25 21.25 19.79 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
      fill={color}
    />
  </svg>
);
const SwapIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M9.00945 21.2502C8.81945 21.2502 8.62945 21.1802 8.47945 21.0302L3.46945 16.0202C3.17945 15.7302 3.17945 15.2502 3.46945 14.9602C3.75945 14.6702 4.23945 14.6702 4.52945 14.9602L9.53945 19.9702C9.82945 20.2602 9.82945 20.7402 9.53945 21.0302C9.38945 21.1702 9.19945 21.2502 9.00945 21.2502Z"
      fill={color}
    />
    <path
      d="M9.00977 21.25C8.59977 21.25 8.25977 20.91 8.25977 20.5V3.5C8.25977 3.09 8.59977 2.75 9.00977 2.75C9.41977 2.75 9.75977 3.09 9.75977 3.5V20.5C9.75977 20.91 9.41977 21.25 9.00977 21.25Z"
      fill={color}
    />
    <path
      d="M20.0095 9.25994C19.8195 9.25994 19.6295 9.18994 19.4795 9.03994L14.4695 4.02994C14.1795 3.73994 14.1795 3.25994 14.4695 2.96994C14.7595 2.67994 15.2395 2.67994 15.5295 2.96994L20.5395 7.97994C20.8295 8.26994 20.8295 8.74994 20.5395 9.03994C20.3895 9.18994 20.1995 9.25994 20.0095 9.25994Z"
      fill={color}
    />
    <path
      d="M14.9902 21.25C14.5802 21.25 14.2402 20.91 14.2402 20.5V3.5C14.2402 3.09 14.5802 2.75 14.9902 2.75C15.4002 2.75 15.7402 3.09 15.7402 3.5V20.5C15.7402 20.91 15.4102 21.25 14.9902 21.25Z"
      fill={color}
    />
  </svg>
);
const SendIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M9.51002 4.23001L18.07 8.51001C21.91 10.43 21.91 13.57 18.07 15.49L9.51002 19.77C3.75002 22.65 1.40002 20.29 4.28002 14.54L5.15002 12.81C5.37002 12.37 5.37002 11.64 5.15002 11.2L4.28002 9.46001C1.40002 3.71001 3.76002 1.35001 9.51002 4.23001Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.44 12H10.84"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ImageIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M15.625 23.6979H9.375C3.71875 23.6979 1.30209 21.2812 1.30209 15.625V9.37498C1.30209 3.71873 3.71875 1.30206 9.375 1.30206H15.625C21.2813 1.30206 23.6979 3.71873 23.6979 9.37498V15.625C23.6979 21.2812 21.2813 23.6979 15.625 23.6979ZM9.375 2.86456C4.57292 2.86456 2.86459 4.5729 2.86459 9.37498V15.625C2.86459 20.4271 4.57292 22.1354 9.375 22.1354H15.625C20.4271 22.1354 22.1354 20.4271 22.1354 15.625V9.37498C22.1354 4.5729 20.4271 2.86456 15.625 2.86456H9.375Z"
      fill={color}
    />
    <path
      d="M9.375 11.1979C7.79166 11.1979 6.51041 9.91667 6.51041 8.33333C6.51041 6.75 7.79166 5.46875 9.375 5.46875C10.9583 5.46875 12.2396 6.75 12.2396 8.33333C12.2396 9.91667 10.9583 11.1979 9.375 11.1979ZM9.375 7.03125C8.65625 7.03125 8.07291 7.61458 8.07291 8.33333C8.07291 9.05208 8.65625 9.63542 9.375 9.63542C10.0937 9.63542 10.6771 9.05208 10.6771 8.33333C10.6771 7.61458 10.0937 7.03125 9.375 7.03125Z"
      fill={color}
    />
    <path
      d="M2.78125 20.5208C2.53125 20.5208 2.28125 20.3958 2.13542 20.1771C1.89584 19.8229 1.98959 19.3333 2.35417 19.0937L7.48959 15.6458C8.61459 14.8854 10.1667 14.9791 11.1875 15.8437L11.5313 16.1458C12.0521 16.5937 12.9375 16.5937 13.4479 16.1458L17.7813 12.4271C18.8854 11.4791 20.625 11.4791 21.7396 12.4271L23.4375 13.8854C23.7604 14.1666 23.8021 14.6562 23.5208 14.9896C23.2396 15.3125 22.75 15.3541 22.4167 15.0729L20.7188 13.6146C20.1979 13.1666 19.3125 13.1666 18.7917 13.6146L14.4583 17.3333C13.3542 18.2812 11.6146 18.2812 10.5 17.3333L10.1563 17.0312C9.67709 16.625 8.88542 16.5833 8.35417 16.9479L3.21875 20.3958C3.08334 20.4791 2.92709 20.5208 2.78125 20.5208Z"
      fill={color}
    />
  </svg>
);
const StickerIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M21.93 12.86C21.91 13.05 21.88 13.23 21.83 13.41C20.79 12.53 19.44 12 17.97 12C14.66 12 11.97 14.69 11.97 18C11.97 19.47 12.5 20.82 13.38 21.86C13.2 21.91 13.02 21.94 12.83 21.96C11.98 22.04 11.11 22 10.21 21.85C6.10001 21.15 2.79001 17.82 2.11001 13.7C0.980005 6.85002 6.82001 1.01002 13.67 2.14002C17.79 2.82002 21.12 6.13002 21.82 10.24C21.97 11.14 22.01 12.01 21.93 12.86Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.83 13.41C21.69 13.9 21.43 14.34 21.06 14.71L14.68 21.09C14.31 21.46 13.87 21.72 13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const EyeIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const EmojiIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CancelIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M12.7573 21.2427L21.2426 12.7574"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.2426 21.2426L12.7573 12.7573"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const AddIcon = ({ color = "#D0D0D0", title = "", ...props }: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M6 12H18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18V6"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CreateVideoIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.52002 7.10986H21.48"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.52002 2.10986V6.96985"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.48 2.10986V6.5199"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.5 21.83 15.49 21.82 15.47 21.81C15.15 21.53 14.87 21.19 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.81 14 21 14.56 21.81 15.46C21.82 15.47 21.83 15.49 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z"
      stroke={color}
      stroke-width="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1801 18.48H16.8201"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 16.8401V20.2001"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CreatePostIcon = ({
  color = "#D0D0D0",
  title = "",
  ...props
}: IconProps) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <path
      d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 13H13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17H11"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  CreateVideoIcon,
  CreatePostIcon,
  AddIcon,
  CancelIcon,
  EmojiIcon,
  ImageIcon,
  StickerIcon,
  EyeIcon,
  SendIcon,
  SwapIcon,
  CategoryIcon,
  UserIcon,
  LeftIcon,
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
