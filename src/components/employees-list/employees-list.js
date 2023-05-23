import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployersList = ({data}) => {
    const elements = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;
