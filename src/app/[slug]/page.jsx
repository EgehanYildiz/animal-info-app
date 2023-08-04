"use client"
import React, { useEffect, useState } from 'react'
import { getAnimal } from "@/utilities/API";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() =>{
    const fetchAnimalInfo = async () => {
      const animalInfo = await getAnimal(params.id);
      setData(animalInfo);
    }

    fetchAnimalInfo();
  }, [params])

  return (
    <div>
      Welcome
      {data && JSON.stringify(data)}
      {params.id}
    </div>
  )
}

export default Page
