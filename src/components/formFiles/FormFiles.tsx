import Button from "./Button";
import Input from "./Input";

function FormFiles({ children }: { children: React.ReactNode }) {
  return (
    <form>
      <fieldset>
        <legend>Form Files</legend>
        {children}
      </fieldset>
    </form>
  );
}

FormFiles.Input = Input;
FormFiles.Button = Button;

export default FormFiles;