Steps:

  - Get basic file structure and simple skeleton
  - Get home screen set up
    - Create custom reusable buttons (announcements, hadith, contact, donate, feedback)
    - create next prayer button
    - scroll view
    - calendar
    - modals for hadith, contact, and feedback
    - redirect to website for donate
    - new page for announcements
  - Communicate with Firebase to grab data
  - Get tabs set up
  - Get Modals set up
  - Get Nav stacks set up
  - Store data
  - begin polishing UI



npx create-expo-app@latest
npx expo start

Any file added to app will create a new route
    - so make a components folder that has reusable content like buttons and sliders and cards
    - each component will have one named export with the filename being the same as the component name
        - e.g. src/components/Button.tsx will contain: export function Button(){}
    - for bigger components, make its own folder inside of the components folder and give it a components folder of its own and index file  in it with the main component.
    - this allows you to break down big components into smaller more manageable components
        - e.g:
        └── src/
            ├── app/
            │   ├── index.tsx
            │   └── _layout.tsx
            └── components/
                ├── Table/
                │   ├── components/
                │   │   ├── Row.tsx
                │   │   └── Cell.tsx
                │   └── index.tsx
                └── Button.tsx
        src/components/Table/index.tsx
        import { Row } from "./Row";
        import { Cell } from "./Cell";

        export function Table() {
        ...
        }


├── assets/                         # static files like aimages, fonts, etc
├── scripts/                        # Developer or build scripts for automation tasks like deployment
├── src/                            # All the code you write.
│   ├── app/                        # defines navigation routes. 
│   │   ├── api/                    # API routes in a separate folder
│   │   │   ├── event+api.ts        #
│   │   │   └── user+api.ts         #
│   │   ├── _layout.tsx             # Defines root layout (shared navigation bar, tab navigator, etc) for all routes
│   │   ├── _layout.web.tsx         # separate layout file for web
│   │   ├── index.tsx               #
│   │   ├── events.tsx              #
│   │   └── settings.tsx            #
│   ├── components/                 #
│   │   ├── Table/                  #
│   │   │   ├── Cell.tsx            #
│   │   │   └── index.tsx           #
│   │   ├── BarChart.tsx            #
│   │   ├── BarChart.web.tsx        # separate components for web and native
│   │   └── Button.tsx              #
│   ├── screens/                    #
│   │   ├── Home/                   #
│   │   │   ├── Card.tsx            # component only used in the home page
│   │   │   └── index.tsx           # returned from /src/app/index.tsx
│   │   ├── Events.tsx              # returned from /src/app/events.tsx
│   │   └── Settings.tsx            # returned from /src/app/settings.tsx
│   ├── server/                     # code used in /api
│   │   ├── auth.ts                 #
│   │   └── db.ts                   #
│   ├── utils/                      # reusable utilities
│   │   ├── formatDate.ts           #
│   │   ├── formatDate.test.ts      # unit test next to the file being tested
│   │   └── pluralize.ts            #
│   ├── hooks/                      #
│   │   ├── useAppState.ts          #
│   │   └── useTheme.ts             #
├── app.json                        # Expo config file
├── eas.json                        # expo application service config file used for eas build and deploy pipelines
└── package.json                    # project dependencies




EXAMPLE
src/
├── app/
│   ├── _layout.tsx               # root layout → defines Tabs
│   ├── index.tsx                 # home screen
│   ├── settings.tsx              # settings screen
│   └── about/                    # folder = nested stack
│       ├── _layout.tsx           # defines the stack for About pages
│       ├── index.tsx             # About page
│       ├── contact.tsx           # Contact Info page
│       └── message.tsx           # Write a Message page
├── screens/
│   ├── Home/
│   │   └── index.tsx
│   ├── About/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Message.tsx
│   └── Settings.tsx

// src/app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

// src/app/about/_layout.tsx
import { Stack } from 'expo-router';

export default function AboutLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'About Us' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact Info' }} />
      <Stack.Screen name="message" options={{ title: 'Send a Message' }} />
    </Stack>
  );
}

// src/app/about/index.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AboutRoute() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About Our Company</Text>
      <Button title="Go to Contact Info" onPress={() => router.push('/about/contact')} />
    </View>
  );
}

// src/app/about/contact.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ContactRoute() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Information</Text>
      <Text>Email: info@example.com</Text>
      <Text>Phone: (555) 555-5555</Text>

      <Button title="Write a Message" onPress={() => router.push('/about/message')} />
    </View>
  );
}

// src/app/about/message.tsx
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function MessageRoute() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Text>Send Us a Message</Text>
      <TextInput
        placeholder="Write your message here"
        value={message}
        onChangeText={setMessage}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginTop: 10,
          padding: 10,
          borderRadius: 6,
        }}
      />
      <Button title="Submit" onPress={() => router.back()} />
    </View>
  );
}
