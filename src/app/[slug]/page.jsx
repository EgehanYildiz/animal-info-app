import { getAnimal } from "@/utilities/API";
import "@/styles/additionalClasses.css"

export default async function Page({ params }){
  const res = await getAnimal(params.slug);
  // Assuming res is the parsed JSON data you provided
    const data = res[0];  // Since the data you provided is in an array, we'll access the first object

    const {
      name,
      taxonomy: { kingdom, class: animalClass },  // We use aliasing to rename class to animalClass since "class" is a reserved keyword in JS
      locations,
      characteristics: { slogan, lifespan, weight, height }
    } = data;

    return (
      <div className="flex flex-col align-items-center justify-content-center min-h-screen bg-gray-100">
          <div className="card">          {/* <div className="pt-5 pl-7 rounded-lg w-5 align-items-center justify-content-center shadow-6 border-3 border-solid border-round-lg border-0" style={{height: '75vh'}}> */}
          <h1 className="text-3xl font-bold mb-6 text-0">{name}</h1>
          <div className="mb-4 text-50 text-xs">
            <strong>Kingdom: </strong>{kingdom}
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Class: </strong>{animalClass}  
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Locations: </strong>{locations.join(', ')}
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Slogan: </strong>{slogan}
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Lifespan: </strong>{lifespan}
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Weight: </strong>{weight}
          </div>
          <div className="mb-4 text-50 text-xs">
            <strong>Height: </strong>{height}
          </div>
        </div>
      </div>

    );
}


