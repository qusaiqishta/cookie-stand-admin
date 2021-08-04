import avgCookiesPerHour from '/data'

export default function ReportTable({ stands }) {
    
    return  (
    <div>
        {stands[0].length >0 ?
        
            <div className="text-center text-gray-700">
                <center>
                <table className="border-2">
                    <thead className="border-2" >
                        <tr className="border-2">
                        <th className="border border-green-600">Location</th>
                        <th className="space-x-4 border border-green-600">7am</th>
                        <th className="border border-green-600">8am</th>
                        <th className="border border-green-600">9am</th>
                        <th className="border border-green-600">10am</th>
                        <th className="border border-green-600">11am</th>
                        <th className="border border-green-600">12pm</th>
                        <th className="border border-green-600">1pm</th>
                        <th className="border border-green-600">2pm</th>
                        <th className="border border-green-600">3pm</th>
                        <th className="border border-green-600">4pm</th>
                        <th className="border border-green-600">5pm</th>
                        <th className="border border-green-600">6pm</th>
                        <th className="border border-green-600">7pm</th>
                        <th className="border border-green-600">Totals</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {stands[0].map(cookie =>
                            <tr key={cookie.location}>
                                <td className="border-2"> {cookie.location} </td>
                                {cookie.avgCookiesPerHour.map((value,i) =>
                                    <td key={'value'+i}> {value} </td>
                                )}
                                <td>{cookie.avgCookiesPerHour.reduce((a, b) => a+b)}</td>
                            </tr>
                   )}
    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="border-2">Totals</td>
                                    {avgCookiesPerHour[0].avgCookiesPerHour.map((_,i) => {
    
                                        const acum = stands[0].reduce((acc, cur) => acc + cur.avgCookiesPerHour[i], 0);
                                        return(<td key={i+stands[0].length}>{acum}</td>)
                                    }
    
                                    )}
                            <td>{stands[1]}</td>
                        </tr>
                    </tfoot>
                </table>
                </center>
            </div>
        : 
            (<h2> <center> No Cookie Stands Available </center> </h2>)
    }
    </div>
    )
}