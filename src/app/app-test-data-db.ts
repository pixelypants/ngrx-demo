import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        let initTrendingBetsRacing = [
            {
                isFutures: false,
                meetingName: "aaa",
                location: "aaa",
                raceType: "a",
                raceNumber: 1,
                raceName: "aaa",
                runnerNumber: 1,
                runnerName: "aaa MASTER",
                returnWin: 3.3,
                returnPlace: 3.3,
                bettingStatus: "Open",
                propositionNumber: 151000
            },
            {
                isFutures: false,
                meetingName: "DOOMBEN",
                location: "QLD",
                raceType: "R",
                raceNumber: 8,
                raceName: "ICANIWILL CLASS 5 HANDICAP (TO_UPDATE)",
                runnerNumber: 10,
                runnerName: "DREAM MASTER",
                returnWin: 2.2,
                returnPlace: 1.22,
                bettingStatus: "Open",
                propositionNumber: 151070
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 4,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (TO_DELETE)",
                runnerNumber: 4,
                runnerName: "VON MYSTIC",
                returnWin: 2.9,
                returnPlace: 1.4,
                bettingStatus: "Open",
                propositionNumber: 150784
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 5,
                raceName: "LADBROKES MULTIVERSE HANDICAP (SAME)",
                runnerNumber: 3,
                runnerName: "CRITICAL THINKING",
                returnWin: 3.2,
                returnPlace: 1.4,
                bettingStatus: "Open",
                propositionNumber: 150803
            }
        ];
        // ===============================
        let updateTrendingBetsRacing = [
            {
                isFutures: false,
                meetingName: "SAME",
                location: "aaa",
                raceType: "a",
                raceNumber: 1,
                raceName: "aaa",
                runnerNumber: 1,
                runnerName: "aaa MASTER",
                returnWin: 3.3,
                returnPlace: 3.3,
                bettingStatus: "Open",
                propositionNumber: 151000
            },
            {
                isFutures: false,
                meetingName: "NEW",
                location: "QLD",
                raceType: "R",
                raceNumber: 8,
                raceName: "ICANIWILL CLASS 5 HANDICAP (TO_UPDATE)",
                runnerNumber: 10,
                runnerName: "DREAM MASTER",
                returnWin: 2.2,
                returnPlace: 1.22,
                bettingStatus: "Open",
                propositionNumber: 151070
            },
            {
                isFutures: false,
                meetingName: "NEW",
                location: "VIC",
                raceType: "R",
                raceNumber: 1,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (TO_DELETE)",
                runnerNumber: 1,
                runnerName: "VON MYSTIC (1)",
                returnWin: 1.1,
                returnPlace: 1.1,
                bettingStatus: "Open",
                propositionNumber: 150785
            },
            {
                isFutures: false,
                meetingName: "NEW",
                location: "VIC",
                raceType: "R",
                raceNumber: 6,
                raceName: "LADBROKES MULTIVERSE HANDICAP (SAME)",
                runnerNumber: 3,
                runnerName: "CRITICAL THINKING",
                returnWin: 6.66,
                returnPlace: 6.66,
                bettingStatus: "Open",
                propositionNumber: 150666
            }
        ];

        return { initBets: initTrendingBetsRacing, updatedBets: updateTrendingBetsRacing };
    }
} 
