import Controllers from '../admin/controllers/ControllersContainer'

export default function Company ({company, employee}) {
    console.log("Company rendered")
    return (
        <div style={{display: 'grid',  gridTemplateColumns: `${employee.isAdmin ? '1fr 1fr' : '1fr'}`, gridGap:'.5rem', margin: '.5rem 1rem .5rem 1rem' }} >
            <div>
                <h2>{company.name}</h2>
            </div>
            {employee.isAdmin ?  <Controllers /> : null } 
        </div>
    )
}