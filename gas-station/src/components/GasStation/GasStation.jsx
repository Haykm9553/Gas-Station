import styles from './gasStation.module.css'

const GasStation = ({station, count}) => {
    
    return (
        <div className={styles.box} >
            <div>
            <p>Gas station {count}</p>
            </div>
            <div>
            <p>Available galons:{station.availablegalon}</p>
            <h2></h2>
            </div>
            
            <div>
            <p>Required galons till next station:{station.requiredgalon}</p>
            <h2></h2>
            </div>
        </div>
    )
}

export default GasStation