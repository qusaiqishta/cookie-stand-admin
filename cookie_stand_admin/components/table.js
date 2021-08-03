import avgCookiesPerHour from '/data'

export default function Table(){
    return(
        <table space-x-4 className="w=1/2 mx-auto my-4">
          <thead>
            <tr>
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
          {
              setCookieStands.map(item => {
                return(
                  <tr>
                    <td className="border border-blue-600 gap-y-4">{item.location}</td>
                    <td className="border border-blue-600">{item}</td>
                    <td className="border border-blue-600">{item.avgCookiesPerHour}</td>
                    <td className="border border-blue-600">{item.avgCookiesPerHour}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    )
}