interface Props {
  className?: string;
  color: string;
}

export default function FacebookIcon({ className, color }: Props) {
  return (
    /*     <svg fill={color} viewBox="0 0 24 24" role="img" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
 */

    <svg
      fill="#fff"
      viewBox="0 0 24 24"
      id="facebook-circle"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle id="primary" cx="12" cy="12" r="10"></circle>
      <path
        fill="#000"
        id="secondary"
        d="M17,9a1,1,0,0,1-1,1H14a1,1,0,0,0-1,1v2h2a1,1,0,0,1,0,2H13v7c-.33,0-.66.05-1,.05s-.67,0-1-.05V15H9a1,1,0,0,1,0-2h2V11a3,3,0,0,1,3-3h2A1,1,0,0,1,17,9Z"
      ></path>
    </svg>
  );
}
