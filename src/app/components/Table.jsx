"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Alldata from "./data.json";
const Table = () => {
  // const url =
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchInfo = async () => {
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const jsonData = await response.json();
  //     if (jsonData && jsonData.length > 0) {
  //       setData(jsonData);
  //     } else {
  //       throw new Error("Empty response or invalid JSON format.");
  //     }
  //   } catch (error: any) {
  //     setError(error.message || "An error occurred while fetching data.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    // fetchInfo();
      setData(Alldata);
  }, []);

  if (loading) {
    return (
      <h1 className="font-sans text-2xl font-bold text-gray-800">
        Please Wait...
      </h1>
    );
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  console.log(data[0]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-lg text-gray-700 bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Price
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                1h%
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                24h%
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                7d%
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Volume(24h)
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Circulating Supply
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer">
                Last 7 Days
              </th>
            </tr>
          </thead>
          {data.map((item) => (
            <>
              <tbody>
                <tr className="bg-white border-b border-t  hover:bg-gray-50">
                  <td className="px-6 py-4 cursor-pointer">{item.market_cap_rank}</td>
                  <td className="px-6 py-4 cursor-pointer">
                    <div className="flex gap-x-2">
                      <Image
                      className="w-6 h-6 rounded-full cursor-pointer"
                        alt="pic"
                        src={item.image}
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                      <p>{item.name}</p>
                      <p className="uppercase cursor-pointer">{item.symbol}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 cursor-pointer">${item.current_price}</td>
                  <td className="px-6 py-4 cursor-pointer">+0.01%</td>
                  <td className="px-6 py-4 cursor-pointer">+0.01%</td>
                  <td className="px-6 py-4 cursor-pointer">+0.01%</td>
                  <td className="px-6 py-4 cursor-pointer">${item.market_cap}</td>
                  <td className="px-6 py-4 cursor-pointer">
                    ${item.sparkline_in_7d.price[0]}
                  </td>
                  <td className="px-6 py-4 cursor-pointer">${item.circulating_supply}</td>
                  <td className="px-6 py-4 cursor-pointer">Chart</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
