import styles from '../../../styles/admin/controllers.module.css'

export default function Controllers() {
    const buttons = [
        {name: "Items", operand: adminFunction},
        {name: "Categories", operand: adminFunction},
        {name: "Employee", operand: adminFunction},
        {name: "Analytics", operand: adminFunction}
    ]    

    const adminFunction = () => console.log("Admin function")
    
    return (
        <div className={styles.controllersContainer}>
            {buttons.map((object, key) => {
                 return <button onClick={object.operand} key={key}>{object.name}</button>
            })}
        </div>
    )
}