type UserFeedbackProps = {
  name: string;
  profileImageUrl: string;
  isVerified: boolean;
  feedback: string;
  className?: string;
};

const UserFeedback: React.FC<UserFeedbackProps> = ({name, profileImageUrl, isVerified, feedback, className}) => {
  return (
    <div className={`${className} flex flex-col justify-start items-start gap-3 py-10 px-11 max-w-[390px] rounded-xl overflow-hidden bg-primary-veryDarkMagenta`}>
      <div className="flex gap-3 items-center">
        <img className="rounded-full h-10 w-10" src={profileImageUrl} alt="picture of custmomer" />
        <div className="flex flex-col">
          <h2 className="font-semibold">{name}</h2>
          {isVerified ? <h3 className="text-primary-softPink">Verified Buyer</h3> : ""}
        </div>
      </div>
      <p className="max-w-[29ch]">" {feedback} "</p>
    </div>
  )
  }


  export default UserFeedback;
