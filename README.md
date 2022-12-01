# bustimePGH

This program processes Pittsburgh's Public Transit routes and stops information as JSON data through the Bustime API


Request an API key from Port Authority's website ->
https://www.rideprt.org/business-center/developer-resources/

Bustime Developer Docs -> http://realtime.portauthority.org/bustime/apidoc/docs/DeveloperAPIGuide3_0.pdf

Base URL for API -> http://truetime.rideprt.org/bustime/api/v3/

Links may change as Port Authority undergoes a name change to Pittsburgh Regional Transit. This can also affect the rtpidatafeed parameters below


# Setup
Install dotenv
`npm install`

## Instructions to run
-Create a config file, then create a .env file within the config

-List your key/value in your environment variables as follows

`BUSTIME_API_KEY = 'KEY_GOES_HERE'`

-Run bustime.js in a code editor of your choice


## getroutes 
http://truetime.rideprt.org/bustime/api/v3/getroutes?key=BUSTIME_API_KEY

    Required Parameters
    (API key)

    Returns
    (route, route name, route color, route display designator, rtpidatafeed)

    Example: 
        <bustime-response>
        <route>
            <rt>1</rt>
            <rtnm>FREEPORT ROAD</rtnm>
            <rtclr>#3300cc</rtclr>
            <rtdd>1</rtdd>
            <rtpidatafeed>Port Authority Bus</rtpidatafeed>
        </route>
        <route>
            <rt>11</rt>
            <rtnm>FINEVIEW</rtnm>
            <rtclr>#ffccff</rtclr>
            <rtdd>11</rtdd>
            <rtpidatafeed>Port Authority Bus</rtpidatafeed>
        </route>
        ...
        </bustime-response>



## getdirections
http://truetime.rideprt.org/bustime/api/v3/getdirections?key=BUSTIME_API_KEY&rt=71A&rtpidatafeed=Port%20Authority%20Bus&dir=OUTBOUND

    Required Parameters
    (key, route, rtpidatafeed)

    Returns
    (direction)

    *Some bus routes such as rt='11' only contain an INBOUND or OUTBOUND direction. All 3 trolleys are both INBOUND && OUTBOUND, as are most bus routes.

    Example:
        <bustime-response>
            <dir>
                <id>OUTBOUND</id>
                <name>OUTBOUND</name>
            </dir>
        <bustime-response>




## getstops
http://truetime.rideprt.org/bustime/api/v3/getstops?key=BUSTIME_API_KEY&rt=71A&rtpidatafeed=Port%20Authority%20Bus&dir=OUTBOUND

    Required Parameters
    (key, route, rtpidatafeed, direction)


    Returns
    (stop id, stop name, latitude, longitude)

    Example:
        <bustime-response>
            <stop>
                <stpid>213</stpid>
                <stpnm>7TH ST + FT DUQUESNE BLVD</stpnm>
                <lat>40.444445000001</lat>
                <lon>-80.000735</lon>
            </stop>
            <stop>
                <stpid>12626</stpid>
                <stpnm>7TH ST + PENN AVE FS</stpnm>
                <lat>40.442939999999</lat>
                <lon>-80.000191000002</lon>
            </stop>
        <bustime-response>
