export const server = "http://localhost:4444";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  mobilelogin: `${server}/auth/mobilelogin`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
  sendotp:`${server}/api/sendotp`,
  alljobs:`${server}/api/alljobs`,
  changepassword:`${server}/api/changepassword`
};

export default apiList;
