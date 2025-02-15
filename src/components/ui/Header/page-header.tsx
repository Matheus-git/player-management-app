import { useNavigate } from "react-router";

type ContentLayoutProps = {
  title: string;
  goBack?: boolean;
};

export const PageHeader = ({
  title,
  goBack,
}: ContentLayoutProps) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start space-x-4">
            {goBack && (
              <button
                onClick={() => navigate(-1)}
                className="items-center cursor-pointer p-2 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};
