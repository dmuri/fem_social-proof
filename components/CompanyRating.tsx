

type CompanyRatingProps = {
  rating: number;
  companyName: string;
  className?: string;
}

const CompanyRating: React.FC<CompanyRatingProps> = ({rating, companyName, className}) => {
  return (
    <div className={`${className} flex flex-col lg:flex-row items-center justify-start gap-2 min-w-[350px] lg:gap-6 lg:pl-6 lg:pr-16 py-4 bg-neutral-lightGrayishMagenta rounded-xl`}>
      <div className="flex gap-2 min-w-[132px]">
        {Array.from({ length: rating }, (_, i) => (
          <img
            key={i}
            src='/images/icon-star.svg'
            alt="star"
            className="h-5 w-5"
          />
        ))}
      </div>
      <p className="text-primary-veryDarkMagenta font-bold text-lg">Rated {rating} Stars in {companyName}</p>
    </div>
  );
};

export default CompanyRating;
