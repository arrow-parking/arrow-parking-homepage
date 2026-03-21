import json

with open('data/parkings.json', 'r', encoding='utf-8') as f:
    parkings = json.load(f)

all_features = set()
for parking in parkings:
    if 'features' in parking and isinstance(parking['features'], list):
        for feature in parking['features']:
            all_features.add(feature)

print("現在のfeatures一覧:")
for feature in sorted(all_features):
    print(f"  - {feature}")
