import React              from "react";
import Header             from "../../Commons/Header/Header";
import {useClassReferrer} from "../../../hooks/useClassReferrer";

type DatepickerProps = {
  locale: Locale,
}

/**
 * Datepicker Functional Component
 * @constructor
 * @return {React.FC<DatepickerProps>}
 */
const Datepicker: React.FC<DatepickerProps> = ({ locale }) => {
  const [referrer] = useClassReferrer();

  return (
    <div className={referrer`ru8c-datepicker-container`}>
      <Header referrer={referrer}/>
    </div>
  );
};

export default Datepicker;