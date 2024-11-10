interface Props {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  designs?: string;
  disabled?: boolean;
}

const Button = ({ title, type, designs, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs} `}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
