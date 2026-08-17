export const loginCopy = {
  title: "Login",
  subtitle: "Login to apply to thousands of jobs for free.",
  submit: "Login",
  google: "Login with Google",
  divider: "Or login with",
  remember: "Remember me",
  forgot: "Forgot password?",
  switchPrompt: "Don't have an account?",
  switchLabel: "Sign Up",
};

export const signupCopy = {
  title: "Sign Up",
  subtitle: "Sign up to apply to thousands of jobs for free.",
  submit: "Continue",
  google: "Sign Up with Google",
  divider: "Or sign up with",
  switchPrompt: "Already have an account?",
  switchLabel: "Login",
  termsPrefix: "By clicking 'Continue', you acknowledge that you have read and accept the",
  terms: "Terms of Service",
  privacy: "Privacy Policy",
};

export const forgotCopy = {
  title: "Forgot password?",
  subtitle:
    "Enter the email address you used when you joined and we'll send you instructions to reset your password.",
  submit: "Send reset instructions",
  back: "Back to Login",
  successTitle: "Check your email",
  successBody: (email: string) =>
    `We sent a password reset link to ${email}. Check your inbox and follow the instructions to reset your password.`,
};
