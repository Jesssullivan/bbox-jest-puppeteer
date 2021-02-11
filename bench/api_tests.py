import requests
from sys import argv

"""
quickly check api responses.

setup venv:
    python3 -m venv merlinapi_venv
    source merlinapi_venv/bin/activate
    pip3 install -r requirements.txt

run:
python3 api_tests.py
"""


TFJS_URL = "http://127.0.0.1:3300/api/v1/classify/27758741/d0601ea6-8a3d-4899-9a24-473a7186f8c7"
TOKEN_URL = "http://127.0.0.1:3300/api/token"
EXPORT_URL = "http://127.0.0.1:3300/api/export"
FALSE_URL = "http://127.0.0.1:3300/api/null"

urls_to_test = [TOKEN_URL, TARGET_URL]


def hit(url):

    print("hitting endpoint: " + url)

    _res = requests.get(url, verify=False)
    _status = " -- status is: "

    if _res.status_code != 200:
        results = "failed" + _status + _res.status_code.__str__()
        return results, False, _res.elapsed.total_seconds()
    else:
        results = "passed" + _status + _res.status_code.__str__()
        try:
            contents = _res.json()
        except:
            contents = _res.text

        return results, contents, _res.elapsed.total_seconds()


def test(url_list):
    for u in url_list:
        _result, _content, _time = hit(u)
        print('test: ' + _result)
        print('contents: ' + str(_content))
        print('elapsed: ' + str(_time))


if __name__ == '__main__':
    test(urls_to_test)
