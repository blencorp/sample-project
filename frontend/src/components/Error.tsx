interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent = ({ errorMessage }: ErrorComponentProps): JSX.Element => (
  <nav className="bg-red-800">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="text-white text-m">{errorMessage}. Please refresh the page.</div>
      </div>
    </div>
  </nav>
);

export default ErrorComponent;