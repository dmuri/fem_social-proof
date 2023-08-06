import CompanyRating from "@/components/CompanyRating";
import UserFeedback from "@/components/UserFeedback";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid gap-10 justify-items-center p-6">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-primary-veryDarkMagenta font-bold text-[3rem] max-w-[15ch] lg:max-w-[14ch] leading-none">10,000+ of our
            users love our products.</h1>
          <p className="text-neutral-darkGrayishMagenta text-lg leading-6 mt-6 font-semibold max-w-[350px] lg:max-w-md">
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services. </p>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:min-w-[600px]">
          <CompanyRating className="lg:self-start" companyName="Reviews" rating={5} />
          <CompanyRating className="lg:self-center" companyName="Report Guru" rating={5} />
          <CompanyRating className="lg:self-end" companyName="BestTech" rating={5} />
        </div>

        <div className="flex flex-col lg:flex-row gap-7 justify-between min-h-[270px] lg:col-span-2">
          <UserFeedback
            name="Colton Smith"
            profileImageUrl="/images/image-colton.jpg"
            isVerified={true}
            feedback="We needed the same printed design as the one we had ordered a week prior. Not only did they find
              the original order, but we also received in time. Excellent!"
            className="lg:self-start"
          />
          <UserFeedback
            name="Irene Roberts"
            profileImageUrl="/images/image-irene.jpg"
            isVerified={true}
            feedback="Customer service is always excellent and very quick turn around. Completely delighted with the
              simplicity of the purchase and the speed of delivery."
            className="lg:self-center"
          />
          <UserFeedback
            name="Anne Wallace"
            profileImageUrl="/images/image-anne.jpg"
            isVerified={true}
            feedback="Put an order with this company and can only praise them for the very high standard. Will
              definitely use them again and recommend them to everyone!"
            className="lg:self-end"
          />
        </div>
      </div>
    </div>
  )
}
