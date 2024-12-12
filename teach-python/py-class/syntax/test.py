import json

x = {
    "name": "doyoung",
    "age": 14,
}

result = json.dumps(x)
print(result, type(result))
result2 = json.loads(result)
print(result2, type(result2))
