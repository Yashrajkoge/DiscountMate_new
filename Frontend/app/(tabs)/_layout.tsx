import { Tabs, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discount Mate</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
      </View>
      <View style={styles.mainContent}>
        <View style={[styles.sidebar, isSidebarCollapsed ? styles.sidebarCollapsed : null]}>
          <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>{isSidebarCollapsed ? 'Expand' : 'Collapse'}</Text>
          </TouchableOpacity>
          {!isSidebarCollapsed && (
            <View style={styles.sidebarButtons}>
              <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.iconButton}>
                <TabBarIcon name="home-outline" color="#000" />
                <Text style={styles.iconButtonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('explore')} style={styles.iconButton}>
                <TabBarIcon name="code-slash-outline" color="#000" />
                <Text style={styles.iconButtonText}>Explore</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.iconButton}>
                <TabBarIcon name="person-outline" color="#000" />
                <Text style={styles.iconButtonText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('contact')} style={styles.iconButton}>
                <TabBarIcon name="call-outline" color="#000" />
                <Text style={styles.iconButtonText}>Contact Us</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('blog')} style={styles.iconButton}>
                <TabBarIcon name="document-text-outline" color="#000" />
                <Text style={styles.iconButtonText}>Blog</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.content}>
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
              headerShown: false,
              tabBarStyle: { display: 'none' }, // Hid the bottom tab bar. This tab bar should be used for mobile versions of the app. 
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="explore"
              options={{
                title: 'Explore',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="contact"
              options={{
                title: 'Contact Us',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'call' : 'call-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="blog"
              options={{
                title: 'Blog',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
                ),
              }}
            />
          </Tabs>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  searchContainer: {
    flex: 1,
    alignItems: 'center',
  },
  searchBox: {
    width: '60%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 200,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    position: 'relative',
  },
  sidebarCollapsed: {
    width: 50,
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  toggleButtonText: {
    fontSize: 12,
    color: '#888',
  },
  sidebarButtons: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
