'use client';

import React from 'react';
import { useEffect, useState } from "react";
import Papa from 'papaparse';

interface unit {
    year: number;
    code: string;
    unitName: string;
}

const ResumePage = () => {
    const [units, setUnits] = useState<unit[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/education.csv');
            const reader = response.body?.getReader();
            const result = await reader?.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result?.value);
            const parsedData = Papa.parse<unit>(csv, { header: true });
            setUnits(parsedData.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Resume</h1>
            <p>This is my resume</p>
            <ul>
                {units.map((unit, index) => (
                    <li key={index}>
                        <h2>{unit.year} - {unit.code}</h2>
                        <p>{unit.unitName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumePage;