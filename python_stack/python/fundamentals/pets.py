people = [
            {'first_name': 'jason',
            'last_name': 'hanna',
            'pets':   [
                    {'pet_name': 'fido',
                        'species': 'dog'},
                    {'pet_name': 'whiskers',
                        'species': 'cat'}
                    ]
            },
            {'first_name': "brock",
            'last_name': 'moore',
            'pets':    [
                    {'pet_name': 'bojangles',
                        'species': 'iguana'},
                    {'pet_name': 'furry',
                        'species': 'cat'}
                    ]
            }
        ]

for peep in people:
    if peep['first_name'] == 'brock':
        for pet in peep['pets']:
            if pet['species'] == 'cat':
                print(pet['pet_name'])