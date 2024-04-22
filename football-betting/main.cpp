#include <fstream>
#include <sstream>
#include <vector>
#include <string>
#include <algorithm>
#include <iostream>

struct PlayerRecord {
    std::string line;
    std::string long_name;

    PlayerRecord(const std::string& line, const std::string& long_name)
            : line(line), long_name(long_name) {}
};

std::string extract_long_name(const std::string& line, int long_name_index) {
    std::istringstream ss(line);
    std::string token;
    int current_index = 0;
    while (std::getline(ss, token, ',')) {
        if (current_index == long_name_index) {
            return token;
        }
        current_index++;
    }
    return "";
}

std::vector<PlayerRecord> read_csv(const std::string& filename) {
    std::ifstream file(filename);
    std::string line;
    std::vector<PlayerRecord> records;

    if (!file.is_open()) {
        std::cerr << "Failed to open file: " << filename << std::endl;
        return {};
    }
    int count = 0;

    std::getline(file, line);
    while (std::getline(file, line)) {
        if(count > 400000){

            break;
        }
        std::cout<<count<<std::endl;
        std::cout<<std::endl;
        if (line.empty() || line.find_first_not_of(',') == std::string::npos) {
            continue;
        }
        std::string long_name = extract_long_name(line, 6);
        records.emplace_back(line, long_name);
        count++;
    }
    return records;
}

bool compare_by_long_name(const PlayerRecord& a, const PlayerRecord& b) {
    return a.long_name < b.long_name;
}

void write_csv(const std::string& filename, const std::vector<PlayerRecord>& records) {
    std::ofstream file(filename);
    if (!file.is_open()) {
        std::cerr << "Failed to write to file: " << filename << std::endl;
        return;
    }
    for (const auto& record : records  ) {

        file << record.line << "\n";
        std::cout << "Writing line: " << record.line << std::endl;
    }
    std::cout << "Data written to file successfully." << std::endl;
}

int main() {
    std::cout << "Program started." << std::endl;
    auto records = read_csv("male_players.csv");
    if (records.empty()) {
        std::cout << "No records to process. Exiting." << std::endl;
        return 1; // Exit with error code if no records were read
    }

    std::cout << "Starting to sort records based on long names." << std::endl;
    std::sort(records.begin(), records.end(), compare_by_long_name);
    std::cout << "Sorting complete." << std::endl;

    write_csv("final_players.csv", records);
    std::cout << "Program completed successfully." << std::endl;
    return 0;
}
