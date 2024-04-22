// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Import ECDSA for signatures (if needed)
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract OTPSmartContract {
    using ECDSA for bytes32;

    struct User {
        string username;
        bytes publicKey;
        uint256 otpSeed;
    }

    mapping(address => User) public users;
    event UserRegistered(address indexed userAddress, string username, bytes publicKey);
    event AuthenticationAttempt(address indexed userAddress, bool success);

    function registerUser(string calldata username, bytes calldata publicKey, uint256 otpSeed) external {
        users[msg.sender] = User(username, publicKey, otpSeed);
        emit UserRegistered(msg.sender, username, publicKey);
    }

    function generateOTP(address userAddress) public view returns (uint256) {
        uint256 timeSlot = block.timestamp / 30;
        return uint256(keccak256(abi.encodePacked(users[userAddress].otpSeed, timeSlot)));
    }

    function authenticateUser(address userAddress, uint256 otp) external {
        bool success = (otp == generateOTP(userAddress));
        emit AuthenticationAttempt(userAddress, success);
    }
}
