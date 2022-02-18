
export default function Employee({employeeInfo}){
    
    return (
        <div className="employeeInfo">
            <p>Name: {employeeInfo.name}</p>
            <p>Employee ID: {employeeInfo.employeeId}</p>
        </div>
    )
}