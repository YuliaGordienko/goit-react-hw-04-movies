import { useHistory } from "react-router-dom";
import s from "./Button.module.css";
export default function Button() {
  const history = useHistory();
  const onClick = () => {
    history.goBack();
  };
  return (
    <div className={s.wrap}>
      <button type="button" onClick={onClick} className={s.btn}>
        Go back
      </button>
    </div>
  );
}
