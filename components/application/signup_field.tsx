// import SignInWithGoogleButton from '@/components/signin_with_google_button';
import { useRouter } from 'next/router';
import database from '@/data/database';
// import { LoginResult } from '@/data/auth';
import { loginWithGoogle } from '@/domain/usecases/login';

const SignUpField = ({ formData, updateFormData, onValidation }) => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await loginWithGoogle();
      console.log({ userId: response.uid });
      database.createNewApplicationResponse({
        userId: response.uid ?? 'anonymous',
        labelApplication: {
          timestamp: new Date(),
          ...formData,
        },
      });
      router.push('/signup_complete');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ backgroundColor: '#15242d', height: '100vh' }} className="flex items-center justify-center">
      <div className="text-center">
        <div>
          <p className="text-lg font-bold text-white mb-4">
            sign up and we&apos;ll email you our decision
          </p>
        </div>
        <div className="flex items-center justify-center w-[60%] mx-auto">
          <button
            onClick={handleLogin}
            className="google_btn"
          >
            <svg
              className="-ml-1 mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
        continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpField;
