import User from "@/models/User";
import FriendService from "@/services/FriendService";
import { ref, type Ref } from "vue";

const friends: Ref<User[]> = ref([]);

const pending: Ref<User[]> = ref([]);

const invitations: Ref<User[]> = ref([]);

const fetchFriends = async () => {
  try {
    const friends = await FriendService.getFriends();
    const users: User[] = [];
    
    friends.forEach((rawUser: any) => {
      users.push(new User(rawUser));
    });

    friends.value = users;
  } catch (error) {
    console.error(error);
  }
};

const fetchPending = async () => {
  try {
    const friends = await FriendService.getPending();

    const users: User[] = [];

    friends.forEach((rawUser: any) => {
      users.push(new User(rawUser));
    });
    
    console.log(users);
    
    pending.value = users;
  } catch (error) {
    console.error(error);
  }
};

export default function useFriend() {
  return {
    friends,
    pending,
    invitations,
    fetchFriends,
    fetchPending,
  };
}
