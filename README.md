# my-social-network

## Overview
It's CRUDS api for managed all users.

### [POST] Create User
Allows the creation of a user

|                             |                  |
|-----------------------------|------------------|
| Requires authentification ? | No               |
| Who can use it ?            | Owner and users  |
| Response formats            | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'first_name': 'Cyril', // required
  'last_name': 'Vimard', // required
  'email': 'xzen769@gmail.com', // required
  'password': '123456789' // required
}
```

#### Response :
```javascript
{
  'user_id': '12483hdhd2838',
  'first_name': 'Cyril',
  'last_name': 'Vimard',
  'email': 'xzen769@gmail.com',
  'password': '123456789'
}
```

### [POST] Create Event
Allow the creation of an event

|                             |                  |
|-----------------------------|------------------|
| Requires authentification ? | No               |
| Who can use it ?            | Owner and users  |
| Response formats            | application/json |

* HTTP request : POST → event/create

#### Parameters :
```javascript
{
  'event_name': 'Hellfest', // required
  'event_description': 'metal festival', // optional
  'start_date': '06/19/2020', // required
  'end_date': '06/21/2020', // required
  'location': 'Clisson', // required
  'event_banner': '********', // optional
  'status': [
    'true',
    'false'
    ], // required
  'organisator': [
    {
      'user_id': '12345abab6789'
    }
  ], // required
  'participants': [
    {
      'user_id': '98765cdcd4321'
    }
  ], // required
  'photo_album': [
    {
      'photo': '*******',
      'photo_comments': [
        {
          'comments': 'comment example'
        }
      ]
    }
  ], // optional
  'tickets': [
    {
      'ticket_name': 'standart',
      'price': '14.99',
      'amount': '100',
    }
  ], // optional
  'event_survey': [
    {
      'survey': [
        {
          'question': 'question example',
          'number_answer': [
            {
              'answer': 'answer example'
            }
          ]
        }
      ] // optional
    }
  ]
```

#### Response :
```javascript
{
  'event_name': 'Hellfest',
  'description': 'metal festival',
  'start_date': '06/19/2020',
  'end_date': '06/21/2020',
  'location': 'Clisson',
  'banner_photo': '********',
  'status': [
    'true',
    'false'
    ],
  'organisator': [
    {
      'user_id': '12345abab6789'
    }
  ],
  'participants': [
    {
      'user_id': '98765cdcd4321'
    }
  ],
  'photo_album': [
    {
      'photo': '*******',
      'photo_comments': [
        {
          'comments': 'comment example'
        }
      ]
    }
  ],
  'tickets': [
    {
      'name': 'standart',
      'price': '14.99',
      'amount': '100',
    }
  ]
}
```

### [POST] Create Group
Allow the creation of a group

|                             |                  |
|-----------------------------|------------------|
| Requires authentification ? | No               |
| Who can use it ?            | Owner and users  |
| Response formats            | application/json |

* HTTP request : POST → group/create

#### Parameters : 
```javascript
{
  'group_name': 'group-example', // required
  'group_description': 'description example', // optional
  'group_icon': '******', // optional
  'group_banner': '******', // optional
  'group_type': [
    'public',
    'private',
    'secret'
  ], // required
  'group_members': [
    {
      'user_id': '12345abab6789',
      'can_post': [
        'true',
        'false'
      ],
      'is_admin': [
        'true',
        'false'
      ]
    }] // optional
}
```

#### Response :
```javascript
{
  'group_name': 'group-example',
  'group_description': 'description example',
  'group_icon': '******',
  'group_banner': '******',
  'group_type': [
    'public',
    'private',
    'secret'
  ],
  'members': [
    {
      'user_id': '12345abab6789',
      'can_post': [
        'true',
        'false'
      ],
      'is_admin': [
        'true',
        'false'
      ]
    }]
}
```
### [POST] Create Feed
Allow the creation of a feed

|                             |                  |
|-----------------------------|------------------|
| Requires authentification ? | No               |
| Who can use it ?            | Owner and users  |
| Response formats            | application/json |

* HTTP request : POST → group/create

#### Parameters :
```javascript
{
  'feed_host': '******', // required
  'message': [
    {
      'message_content': '*******',
      'message_datetime': 'DD/MM/AAAA hh-mm',
      'message_author': '12345abab6789',
      'message_comments': [
        {
          'comment_content': '********',
          'comment_datetime': 'DD/MM/AAAA hh-mm',
          'comment_author': '12345abab6789'
        }
      ] // optional
    }
  ]
}
```

#### Response :
```javascript
{
  'feed_host': '******',
  'message': [
    {
      'message_content': '*******',
      'message_datetime': 'DD/MM/AAAA hh-mm',
      'message_author': '12345abab6789',
      'message_comments': [
        {
          'comment_content': '********',
          'comment_datetime': 'DD/MM/AAAA hh-mm',
          'comment_author': '12345abab6789'
        }
      ]
    }
  ]
}
```


