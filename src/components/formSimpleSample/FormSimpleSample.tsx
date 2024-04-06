const Input = () => {
  return <input type="text" />;
};

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button type="submit">{children}</button>;
};

function FormSimple({ children }: { children: React.ReactNode }) {
  return (
    <form>
      <fieldset>
        <legend>Form Simple</legend>
        {children}
      </fieldset>
    </form>
  );
}

FormSimple.Input = Input;
FormSimple.Button = Button;

export function FormSimpleSample() {
  return (
    <>
      <FormSimple>
        <FormSimple.Input></FormSimple.Input>
        <FormSimple.Button>Submit</FormSimple.Button>
      </FormSimple>
    </>
  );
}

export default FormSimpleSample;
