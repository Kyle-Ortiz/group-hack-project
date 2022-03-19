import styles from '../../../styles/admin/controllers.module.css'

export default function Controllers() {
    const buttons = [
        {name: "Items", operand: {}},
        {name: "Categories", operand: {}},
        {name: "Employee", operand: {}},
        {name: "Analytics", operand: {}}
    ]    
    return (
        <div className={styles.controllersContainer}>
            {buttons.map((object, key) => {
                 return <button onClick={object.operand} key={key}>{object.name}</button>
            })}
        </div>
    )
}