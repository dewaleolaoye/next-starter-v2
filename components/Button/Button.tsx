import Styles from "./button.module.scss";

type Props = {
  width?: string;
  title: string;
};

const Button = ({ width, title }: Props) => {
  return (
    <button className={Styles.btn} style={{ width }}>
      {title}
    </button>
  );
};

export default Button;
