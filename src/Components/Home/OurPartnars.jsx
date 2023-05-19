

const ToyBrandLogos = () => {
    const brandLogos = [
        {
            name: 'Hasbro',
            logoSrc: 'https://i.ibb.co/j6w5G8q/Hasbro-Logo.png',
        },
        {
            name: 'Mattel',
            logoSrc: 'https://i.ibb.co/0nmPZP8/5a0c74ab9642de34b6b65cf3.png',
        },
        {
            name: 'NECA Toys',
            logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Neca_company_logo.png',
        },
        {
            name: 'FUNCO POP',
            logoSrc: 'https://cdn.cdnlogo.com/logos/f/34/funko.png',
        },
        {
            name: 'MEZCO Toys',
            logoSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f2230f3-d395-4701-9831-457e72d51cdf/df5v54r-d7dc2324-d5cf-45f3-b869-f6599d60f5c4.png/v1/fill/w_1280,h_322/mezco_toys_logo_with_samsung_byline_by_appleberries22_df5v54r-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIyIiwicGF0aCI6IlwvZlwvMWYyMjMwZjMtZDM5NS00NzAxLTk4MzEtNDU3ZTcyZDUxY2RmXC9kZjV2NTRyLWQ3ZGMyMzI0LWQ1Y2YtNDVmMy1iODY5LWY2NTk5ZDYwZjVjNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dRk1_o0sD_YHVOeRDVa7p2p4YIAyy7I9bYJm3A44lgc',
        },
        {
            name: 'McFarlane Toys',
            logoSrc: 'https://www.comicbasics.com/wp-content/uploads/2019/02/McFarlane-Toys-and-DC-Agreement.png',
        }
    ];

    return (
        <div className="py-8 md:mt-72 bg-pink-900">
            <h1 className="flex justify-center p-5 text-5xl   text-amber-300  font-bold">Our Brand Partnars</h1>
            <div className="flex bg-white flex-wrap justify-center py-2 items-center">
                {brandLogos.map((brand) => (
                    <img
                        key={brand.name}
                        src={brand.logoSrc}
                        alt={brand.name}
                        className="w-32  h-auto mx-4"
                    />
                ))}
            </div>
        </div>
    );
};

export default ToyBrandLogos;
