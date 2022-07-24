// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Defi {

    address public lender;
    mapping(address => uint) public amountLenderDeposited;

    struct BorrowRequest {
        uint period;
        string purposeOfLoan;
        bool collateral;
        uint interest;
        uint santionedAmount;


    }

    mapping(address => BorrowRequest) public Borrower;

    uint public ineuronValue;


    constructor() {
        ineuronValue = 0.1 ether;
    }

    receive() external payable {

    }

    function lenderDeposit() external payable {
        lender = msg.sender;
        amountLenderDeposited[lender] += msg.value;
    }

    function getContractBalance() public view returns(uint){
        return address(this).balance;
    }

    function borrowRequest( uint _period, string memory _purposeOfLoan, uint collatoral) public {
        BorrowRequest memory request;
        //months
        if(_period <= 12 ) {
            request.interest = 12;
        } else {
            request.interest = 10;
        }

        //collataral
        // 80% of collataral value will be santioned amount
        request.santionedAmount = (collatoral * 10) / 125;
        uint contractBalance = getContractBalance();

        require(contractBalance > request.santionedAmount);
        
        request.period = _period;
        request.purposeOfLoan = _purposeOfLoan;
        request.collateral = true;

        Borrower[msg.sender] = request;

        payable(msg.sender).transfer(request.santionedAmount);

    }

    function emiPayment(address _contractAddress) external payable {
        
        BorrowRequest memory request = Borrower[msg.sender];

        payable(_contractAddress).transfer(msg.value);

        request.santionedAmount -= msg.value;
        request.period -= 1;

    }


}