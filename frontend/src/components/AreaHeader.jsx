import propTypes from "prop-types";
import { EmployeeModal } from "./EmployeeModal";
import { v4 as uuidv4 } from 'uuid';

export const AreaHeader = ({employees,area}) => {
    return (
        <>
            {employees?.map((empleado) => (
                area === empleado.workArea && <div key={uuidv4()}><EmployeeModal  empleado={empleado} /> </div>
            ))}
        </>
    );
}


AreaHeader.propTypes = {
    employees: propTypes.array,
    area: propTypes.string
}