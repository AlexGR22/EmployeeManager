import { useEffect, useState } from "react";
import { AreaHeader } from "../components/AreaHeader"
import { useFetch } from "../hooks/useFetch"

export const  Areas = () => {

    const {data, isLoading,hasError,errorMessage} = useFetch(import.meta.env.VITE_API_URL)

    const [areas, setAreas] = useState([]);

    useEffect(() => {
        data && setAreas(data.reduce((areas, empleado) => areas.includes(empleado.workArea) ? areas : [...areas, empleado.workArea], []));
      }, [data]);

      const countUsersByWorkArea = (data) => {
        return data?.reduce((acc, curr) => {
          const { workArea } = curr;
          if (acc[workArea]) {
            acc[workArea].count += 1;
          } else {
            acc[workArea] = { count: 1 };
          }
      
          return acc;
        }, {});
      };

      const usersByWorkArea = countUsersByWorkArea(data)


  return (
    <div className="bg-blue-900 px-5 py-10 rounded-lg w-full">
    <h1 className="text-white mb-5 w-full text-3xl underline font-black ">Employee Manager - Areas</h1>
    {hasError && <p className="text-white font-bold">{errorMessage.messageText}</p>}
    {isLoading && <p className="text-white font-bold">Loading...</p>}
        <div>
    {areas?.map((area) => (
      <div key={area}>
        <h2 className="text-2xl text-blue-300 mb-2 font-bold"> <span >{area}</span> ({usersByWorkArea[area]?.count})</h2>
        <hr className="border-blue-300"/>
        <div>
          <AreaHeader
            employees={data}
            area={area}
            />
        </div>
      </div>
    ))}
  </div>
    </div>
  )
}
