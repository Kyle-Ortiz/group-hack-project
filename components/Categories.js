export default function Categories({categories}) {

    return (
        <div className="categories">
            {categories.map((category,index) => {
                return <div key={index} className="individualCategory">
                    {category}
                </div>
            })}
        </div>
    )
}