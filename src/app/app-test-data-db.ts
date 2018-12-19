import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        let initTrendingBetsRacing = [
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
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 4,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (SAME)",
                runnerNumber: 9,
                runnerName: "LYNCH MOB",
                returnWin: 8.5,
                returnPlace: 2.4,
                bettingStatus: "Open",
                propositionNumber: 150789
            },
            {
                isFutures: false,
                meetingName: "STRATHALBYN",
                location: "SA",
                raceType: "R",
                raceNumber: 5,
                raceName: "TOFFISH CLASS 2 HANDICAP (SAME)",
                runnerNumber: 1,
                runnerName: "FULTON STREET",
                returnWin: 2,
                returnPlace: 1.35,
                bettingStatus: "Open",
                propositionNumber: 150931
            }
        ];
        let updateTrendingBetsRacing = [
            {
                isFutures: false,
                meetingName: "DOOMBEN",
                location: "QLD",
                raceType: "R",
                raceNumber: 8,
                raceName: "ICANIWILL CLASS 5 HANDICAP (UPDATE)",
                runnerNumber: 10,
                runnerName: "DREAM MASTER",
                returnWin: 6.66,
                returnPlace: 6.66,
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
                returnWin: 0.00,
                returnPlace: 0.00,
                bettingStatus: "Open",
                propositionNumber: 150666
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
            },
            {
                isFutures: false,
                meetingName: "CAULFIELD",
                location: "VIC",
                raceType: "R",
                raceNumber: 4,
                raceName: "LADBROKES LIVE STREAMING HANDICAP (SAME)",
                runnerNumber: 9,
                runnerName: "LYNCH MOB",
                returnWin: 8.5,
                returnPlace: 2.4,
                bettingStatus: "Open",
                propositionNumber: 150789
            },
            {
                isFutures: false,
                meetingName: "STRATHALBYN",
                location: "SA",
                raceType: "R",
                raceNumber: 5,
                raceName: "TOFFISH CLASS 2 HANDICAP (SAME)",
                runnerNumber: 1,
                runnerName: "FULTON STREET",
                returnWin: 2,
                returnPlace: 1.35,
                bettingStatus: "Open",
                propositionNumber: 150931
            }
        ];

        return { initBets: initTrendingBetsRacing, updatedBets: updateTrendingBetsRacing };
    }
} 
