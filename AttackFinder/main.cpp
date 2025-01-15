#include<iostream>
#include<vector>
#include<string>
#include<fstream>

std::vector<std::string> nmapScan();
bool portChecker(std::string portInput);

int main()
{
        //Take in Nmap file
        std::vector<std::string> nmapData = nmapScan();

        // Testing Return of nmapScan
        for(int i = 0; i < nmapData.size(); i++)
        {
          portChecker(nmapData[i]);
        }

        // Take Array Port number + Compare to hacktricks
        // // If met, print advice to terminal


        return 0;
}

std::vector<std::string> nmapScan()
{
        //Create string buffer
        std::string dataBuff;
        std::vector<std::string> nmapBuff;

        //Take in file to buffer
        std::ifstream nmapData("files/nmapC");

        // Loop through lines and check for port start
        while(getline(nmapData ,dataBuff))
                {
                        // Check line for number? If not, Skip, if yes, print
                        if(isdigit(dataBuff[0]))
                        {
                                
                                //std::cout << dataBuff << "\n";
                                nmapBuff.push_back(dataBuff);

                        }

                        //std::cout << dataBuff << "\n";
                }

        nmapData.close();
        return nmapBuff;
}

bool portChecker(std::string portInput)
{
        // Take string
        std::cout << "Testing:\n" << portInput << "\n";

        return true;
}
