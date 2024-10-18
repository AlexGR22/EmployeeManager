import propTypes from "prop-types"
import { useState } from "react"

export const EmployeeModal = ({ empleado }) => {

    const [isOpen, setIsOpen] = useState(false)

    const { name, age, workArea, yearsOfService, phone } = empleado

    return (
        <>
            <button className="bg-blue-900 py-2  rounded-md text-white hover:text-blue-300  " onClick={() => setIsOpen(true)}>{name}</button>

            {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
                        <div className="bg-white text-black p-5 flex flex-col gap-5 justify-center items-center rounded-lg">
    
                            <div className="bg-blue-900 text-white rounded-lg p-4">
                                <h1 className="text-3xl font-bold mb-2">Employee Information</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-blue-300">Name:</span>
                                        <p className="text-lg">{name}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-300">Age:</span>
                                        <p className="text-lg">{age}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-300">Department:</span>
                                        <p className="text-lg">{workArea}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-300">Years of Service:</span>
                                        <p className="text-lg">{yearsOfService}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-blue-300">Phone:</span>
                                        <p className="text-lg">{phone}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-blue-700  hover:bg-blue-600 py-2 px-6 rounded-md text-white font-bold mt-5" onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

EmployeeModal.propTypes = {
    empleado: propTypes.shape({
        name: propTypes.string,
        age: propTypes.string,
        workArea: propTypes.string,
        yearsOfService: propTypes.number,
        phone: propTypes.string
    })
}