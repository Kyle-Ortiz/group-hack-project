
export default function Employee({employeeInfo}){
    
    return (
        <div className="employeeInfo">
            <p>{employeeInfo.name}</p>
            <p>{employeeInfo.employeeId}</p>
        </div>
    )
}