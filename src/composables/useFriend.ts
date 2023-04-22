import User from "@/models/User";
import FriendService from "@/services/FriendService";
import { ref, type Ref } from "vue";

const friends: Ref<User[]> = ref([]);

const sentInvitations: Ref<User[]> = ref([]);

const waitingInvitations: Ref<User[]> = ref([]);

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

const fetchSentInvitations = async () => {
  try {
    const friends = await FriendService.getSentInvitations();

    const users: User[] = [];

    friends.forEach((rawUser: any) => {
      users.push(new User(rawUser));
    });
    
    console.log(users);
    
    sentInvitations.value = users;
  } catch (error) {
    console.error(error);
  }
};

const fetchWaitingInvitations = async () => {
  try {
    const friends = await FriendService.getWaitingInvitations();
    const users: User[] = [];
    
    friends.forEach((rawUser: any) => {
      users.push(new User(rawUser));
    });

    waitingInvitations.value = users;
  } catch (error) {
    console.error(error);
  }
}

export default function useFriend() {
  return {
    friends,
    waitingInvitations,
    sentInvitations,
    fetchFriends,
    fetchSentInvitations,
    fetchWaitingInvitations
  };
}
