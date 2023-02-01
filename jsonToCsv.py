import pandas as pd
import requests

transitURI = [
    'json uris go here'
]


def read_json_from_uris(uris):
    data = []
    for uri in uris:
        response = requests.get(uri)
        if response.status_code == 200:
            stops = response.json().get('bustime-response', {}).get('stops', [])
            for stop in stops:
                data.append(stop)
    return data

def write_to_csv(data, file_name):
    df = pd.DataFrame(data)
    df.rename(columns={'stpid': 'Stop ID', 'stpnm': 'Stop Name', 'lat': 'Latitude', 'lon': 'Longitude'}, inplace=True)
    df.to_csv(file_name, index=False)


if __name__ == '__main__':
    uris = transitURI # replace with your own URIs
    data = read_json_from_uris(uris)
    write_to_csv(data, 'output.csv')
